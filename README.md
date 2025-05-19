#########################################  
\#  Installation assuming arch on grub  #  
#########################################  

First; remove the need for a password:  
```sudo visudo```
and append  
```$USER ALL=(ALL) NOPASSWD: ALL```  

Then copy the ssh keys over.

The install script should take care of everything else.

Copy any config file(s) to the to the place it would be if "dotfiles" was the home directory. (dotfiles needs to be in the home directory for that to work)

commit

remove/move the original config file in the home/ etc folder

stow .

symlinks will be created in the original files place
