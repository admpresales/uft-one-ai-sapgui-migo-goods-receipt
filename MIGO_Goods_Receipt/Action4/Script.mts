AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")

AIUtil.FindTextBlock("Exit").Click
'AIUtil("button", "Exit").Click
AIUtil("button", "Yes").Click
