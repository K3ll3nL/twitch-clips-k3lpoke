; Force installation to Program Files
!if $%PROCESSOR_ARCHITECTURE% == "AMD64"
  InstallDir "$PROGRAMFILES\K3lPoke OBS Tools"
!else
  InstallDir "$PROGRAMFILES (x86)\K3lPoke OBS Tools"
!endif
