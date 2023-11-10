
AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")
AIUtil("search", micAnyText, micFromLeft, 1).Click
AIUtil("text_box", "Find").SetText Parameter.Item("TCode")
If AIUtil("text_box", "Find").GetValue <> Parameter.Item("TCode") Then
	AIUtil("text_box", "Find").SetText Parameter.Item("TCode")
End If
AIUtil("check_mark").Click
AIUtil.FindTextBlock(Parameter.Item("SAP_Menu_Name")).DoubleClick

