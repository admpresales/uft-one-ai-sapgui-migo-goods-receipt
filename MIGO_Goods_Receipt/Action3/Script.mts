Dim LogMessage, LogMessageArray, MessageDate, DocDate

AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiComboBox("Action").Select Parameter.Item("Action")
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiComboBox("Action Type").Select Parameter.Item("Action_Type")
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiEdit("Init.entry of stBal.").Set Parameter.Item("Init_Entry_of_stBal")
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").Maximize @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiEdit("Material").Set Parameter.Item("Material") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiTabStrip("TS_GOITEM").Select "Quantity" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiEdit("Quantity in Unit of Entry").Set Parameter.Item("Quantity")
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiTabStrip("TS_GOITEM").Select "Where" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiEdit("Plant").Set Parameter.Item("Plant") @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
If AIUtil.FindTextBlock("Change to Default Values").Exist(2) Then
	AIUtil("check_mark").Click
End If
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiEdit("Storage location").Set Parameter.Item("Storage_Location") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SAPGuiButton("Post").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
'SAPGuiSession("Session").SAPGuiWindow("Goods Receipt").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
'SAPGuiSession("Session").SAPGuiWindow("Display logs").SAPGuiLabel("Posting only possible").Output CheckPoint("Posting only possible in periods") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
If AIUtil.FindTextBlock("Display logs").Exist(5) Then
	LogMessage = AIUtil.FindTextBlock(micAnyText, micWithAnchorBelow, AIUtil("check_mark")).GetText
	AIUtil("close", micAnyText, micFromBottom, 1).Click
	LogMessageArray = Split(LogMessage, " ")
	'print LogMessageArray(5)
	MessageDate = Split (LogMessageArray(5), "/")
	DocDate = MessageDate(1) & "/01/" & MessageDate(0)
	AIUtil("text_box", "Document Date:").SetText DocDate
	AIUtil.FindTextBlock("Document Date:").Click
	Set Anchor = AIUtil.FindTextBlock("Posting Date:")
	AIUtil("text_box", micAnyText, micWithAnchorOnLeft, Anchor).SetText DocDate
	'AIUtil("text_box", "Posting Date:").SetText DocDate
	
	AIUtil("button", "Post").Click
End If
Set SuccessMessage=AIRegex("Material document \d* posted View details")
AIUtil.FindTextBlock(SuccessMessage).CheckExists TRUE

AIUtil.FindTextBlock("Exit").Click
