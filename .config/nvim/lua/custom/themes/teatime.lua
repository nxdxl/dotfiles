
local M = {}

M.base_30 = {
  white = "#c2649f", -- Cursor Line Nr,
  darker_black = "#fffaf6", --Float BG, NvimTree BG
  black = "#fff6f6", -- Nvim BG, Pmenu FG, Nvim Internal Error FG, Lazy H1 FG
  black2 = "#fffaf6", -- Tabline BG
  one_bg = "#fff6f6", --Pmenu BG, Lazy Button BG
  one_bg2 = "#fde0ff", -- inactive tab BG, Highligh of context
  one_bg3 = "#f3c4c4", -- Vim Mode
  grey = "#9ca0b0", -- Pemnu Thumb, Line Nr,
  grey_fg = "#f3c4c4", -- Comments
  grey_fg2 = "#7c7f93",
  light_grey = "#5c5f77", -- Lazy Button FG, Mode FG
  red = "#e64553", -- Nvim Internal Error, Lazy H2 FG
  baby_pink = "#cd6868",
  pink = "#ea76cb", -- Lazy commit issue
  line = "#acb0be", --Window Separator
  green = "#bfa4cd", -- Health Success BG, Lazy H1 FG
  vibrant_green = "#179299",
  nord_blue = "#303446", -- active tab bg
  blue = "#a556ad", -- Float Boarder
  yellow = "#93ba84",
  sun = "#93ba84",
  purple = "#c2649f", -- Lazy Reason ft
  dark_purple = "#cd6868",
  teal = "#179299", -- Lazy Value
  orange = "#889499",
  cyan = "#209fb5", -- Visual Mode
  statusline_bg = "#dce0e8", -- Status line BG
  -- lightbg = "#dc322f", --
  pmenu_bg = "#7c7f93", -- Pmenu Select BG
  folder_bg = "#1b1b2e", -- nvim tree folders color
}

-- https://github.com/catppuccin/base16
M.base_16 = {
  base00 = "#fff6f6", -- Default Background
  base01 = "#fffdf6", -- Lighter Background (Used for status bars, line number and folding marks)
  base02 = "#4ba89c", -- Selection Background
  base03 = "#f3c4c4", -- Comments, Invisibles, Line Highlighting
  base04 = "#f3adcd", -- Dark Foreground (Used for status bars)
  base05 = "#1b1b2e", -- Default Foreground, Caret, Delimiters, Operators
  base06 = "#dc8a78", -- Light Foreground (Not often used)
  base07 = "#7287fd", -- Light Background (Not often used)
  base08 = "#1b1b2e", -- Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
  base09 = "#889499", -- Integers, Boolean, Constants, XML Attributes, Markup Link Url
  base0A = "#179299", -- Classes, Markup Bold, Search Text Background
  base0B = "#bfa4cd", -- Strings, Inherited Class, Markup Code, Diff Inserted
  base0C = "#93ba84", -- Support, Regular Expressions, Escape Characters, Markup Quotes
  base0D = "#a556ad", -- Functions, Methods, Attribute IDs, Headings
  base0E = "#c2649f", -- Keywords, Storage, Selector, Markup Italic, Diff Changed
  base0F = "#cd6868", -- Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
}

M.type = "light"

return M
