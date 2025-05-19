# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt extendedglob nomatch notify
unsetopt autocd beep
bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/styx/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall


export EDITOR='nvim'
export VISUAL='nvim'

alias config="nvim ~/.zshrc"
alias vim="nvim"
alias reload="source ~/.zshrc"
alias shutdown="shutdown -h now"
alias lit="lazygit"
alias imopen="loupe"
alias audio-visualizer="cava"
alias sync="onedrive --synchronize"
alias neofetch=fastfetch
alias ls="ls --color"

export PATH="$PATH:/home/styx/.local/bin"

eval "$(oh-my-posh init zsh --config ~/.config/.oh-my-posh-themes/theme.json)"
