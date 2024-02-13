# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

# User specific environment
if ! [[ "$PATH" =~ "$HOME/.local/bin:$HOME/bin:" ]]; then
    PATH="$HOME/.local/bin:$HOME/bin:$PATH:/opt/jdtls/bin/"
fi
export PATH

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
if [ -d ~/.bashrc.d ]; then
    for rc in ~/.bashrc.d/*; do
        if [ -f "$rc" ]; then
            . "$rc"
        fi
    done
fi 
unset rc

export EDITOR='nvim'
export VISUAL='nvim'

alias vim="nvim"
alias reload="source ~/.bashrc"
alias shutdown="shutdown -h now"
alias pdf="~/.scripts/pdf-viewer/pdf"
alias pfp="cd ~/nextcloud/uni/pfp/"

. "$HOME/.cargo/env"
