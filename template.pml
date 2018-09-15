<?xml version="1.0" encoding="UTF-8" ?>
<Package name="template" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="start_template" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="animations/little_laugh" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="DabDance" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="dlg_welcome" src="dlg_welcome/dlg_welcome.dlg" />
    </Dialogs>
    <Resources>
        <File name="index" src="html/index.html" />
        <File name="jquery.min" src="html/js/jquery.min.js" />
        <File name="robotutils" src="html/js/robotutils.js" />
        <File name="reacting_to_events" src="python/reacting_to_events.py" />
        <File name="Enu_Ono_Laugh_Happy_2_pitch_115" src="sounds/Enu_Ono_Laugh_Happy_2_pitch_115.ogg" />
        <File name="NewMove" src="NewMove.pmt" />
        <File name="Markus" src="html/img/calendar/Markus.png" />
        <File name="Peter" src="html/img/calendar/Peter.png" />
        <File name="html5reset-1.6.1" src="html/css/html5reset-1.6.1.css" />
        <File name="style" src="html/css/style.css" />
        <File name="party_parrot" src="html/img/emojis/party_parrot.gif" />
        <File name="sad_pepe" src="html/img/emojis/sad_pepe.png" />
        <File name="David" src="html/img/person/David.png" />
        <File name="Markus" src="html/img/person/Markus.png" />
        <File name="Peter" src="html/img/person/Peter.png" />
        <File name="script" src="html/js/script.js" />
    </Resources>
    <Topics>
        <Topic name="dlg_welcome_enu" src="dlg_welcome/dlg_welcome_enu.top" topicName="dlg_welcome" language="en_US" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
