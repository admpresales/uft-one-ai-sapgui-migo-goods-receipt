SAPGuiUtil.AutoLogon Parameter("SystemName"), Parameter("Client"), Parameter("User"), Parameter("Password"), Parameter("Language")

AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")
AIUtil.FindTextBlock("Exit").Click
AIUtil("button", "Yes").Click
AIUtil.SetContext Dialog("text:=SAP Logon 770", "nativeclass:=#32770", "is owned window:=False", "is child window:=False")
AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("Options.").Click
If AIUtil.FindTextBlock("Theme Settings").Exist(0) Then
	AIUtil.FindTextBlock("Theme Settings").Click
Else
	AIUtil.FindTextBlock("Visual Design").Click
	AIUtil("right_triangle", micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Visual Design", micFromBottom, 1)).Click
	AIUtil.FindTextBlock("Theme Settings").Click
End If
AIUtil("combobox", "Select Theme").Select "Quartz Theme"
AIUtil("button", "OK").Click
AIUtil("close").Click

SAPGuiUtil.AutoLogon Parameter("SystemName"), Parameter("Client"), Parameter("User"), Parameter("Password"), Parameter("Language")

