# The following lines were added by compinstall

zstyle ':completion:*' completer _complete _ignored _approximate
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' matcher-list '' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]}' 'r:|[._-]=** r:|=**'
zstyle ':completion:*' max-errors 2
zstyle :compinstall filename '/home/nodel/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
bindkey -e
# End of lines configured by zsh-newuser-install

export EDITOR='nvim'
export VISUAL='nvim'

alias zshconfig="nvim ~/.zshrc"
alias vim="nvim"
alias reload="source ~/.zshrc"
alias shutdown="shutdown -h now"
alias pdf="~/.scripts/pdf-viewer/pdf"
alias lit="lazygit"
alias imopen="loupe"
alias open="xdg-open"

export PATH="$HOME/.local/bin:$PATH:/home/nodel/.local/share/coursier/bin:/opt/eww/target/release"
export HYPRSHOT_DIR="/home/nodel/nextcloud/screenshots"

eval "$(zoxide init --cmd cd zsh)"
eval "$(oh-my-posh init zsh --config ~/.oh-my-posh-themes/theme.json)"
