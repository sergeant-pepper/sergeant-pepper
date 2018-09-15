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
        <File name="app" src="html/css/app.css" />
        <File name="banana_parrot" src="html/img/banana_parrot.gif" />
        <File name="sad_pepe" src="html/img/sad_pepe.png" />
        <File name="troll" src="html/img/troll.png" />
        <File name="trolldance" src="html/img/trolldance.gif" />
        <File name="index" src="html/index.html" />
        <File name="app" src="html/js/app.js" />
        <File name="init" src="html/js/init.js" />
        <File name="jquery.min" src="html/js/jquery.min.js" />
        <File name="robotutils" src="html/js/robotutils.js" />
        <File name="reacting_to_events" src="python/reacting_to_events.py" />
        <File name="Enu_Ono_Laugh_Happy_2_pitch_115" src="sounds/Enu_Ono_Laugh_Happy_2_pitch_115.ogg" />
        <File name="NewMove" src="NewMove.pmt" />
    </Resources>
    <Topics>
        <Topic name="dlg_welcome_enu" src="dlg_welcome/dlg_welcome_enu.top" topicName="dlg_welcome" language="en_US" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
