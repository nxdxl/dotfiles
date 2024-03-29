local overrides = require("custom.configs.overrides")

---@type NvPluginSpec[]
local plugins = {

  -- Override plugin definition options

  {
    "neovim/nvim-lspconfig",
    config = function()
      require "plugins.configs.lspconfig"
      require "custom.configs.lspconfig"
    end, -- Override to setup mason-lspconfig
  },

  -- override plugin configs
  {
    "williamboman/mason.nvim",
    opts = {
		ensure_installed = {
			"rust-analyzer",
		},
		overrides.mason,
	}
  },

  {
    "nvim-treesitter/nvim-treesitter",
    opts = overrides.treesitter,
  },

  {
    "nvim-tree/nvim-tree.lua",
    opts = overrides.nvimtree,
  },

  -- Install a plugin
  {
    "max397574/better-escape.nvim",
    event = "InsertEnter",
    config = function()
      require("better_escape").setup()
    end,
  },

  {
    "stevearc/conform.nvim",
    --  for users those who want auto-save conform + lazyloading!
    -- event = "BufWritePre"
    config = function()
      require "custom.configs.conform"
    end,
  },
  {
	"rust-lang/rust.vim",
	ft = "rust",
	init = function()
		vim.g.rustfmt_autosave = 1
	end
  },
  {
	"saecki/crates.nvim",
	dependencies = "hrsh7th/nvim-cmp",
	ft = {"rust", "toml"},
	config = function(_, opts)
		local crates = require("crates")
		crates.setup(opts)
		crates.show()
	end,
  },
  {
	"hrsh7th/nvim-cmp",
	opts = function()
		local M = require("plugins.configs.cmp")
		table.insert(M.sources, {name = "crates"})
		return M
	end
  },
  {
	"vimwiki/vimwiki",
	lazy = false,
	init = function()
		vim.g.vimwiki_list = {
			{
				path = "~/nextcloud/notes/vimwiki/",
				syntax = "markdown",
				ext = ".md",
			},
		}
	end,
  },
  {
	"elkowar/yuck.vim",
	lazy = false,
	-- opts = {
	-- 	filetypes = {"yuck"},
	-- }
  },
 --  {
	-- "catppuccin/nvim",
	-- name = "catppuccin",
	-- priority = 1000,
	-- lazy = false,
	-- init = function()
	-- 	vim.g.catppuccin_flavor = "latte"
	-- 	require("catppuccin").setup {
	-- 		flavour = "latte",
	-- 		dim_inactive = {
	-- 			enabled = false,
	-- 		},
	-- 		integrations = {
	-- 			cmp = true,
	-- 			nvimtree = true,
	-- 			treesitter = true,
	-- 		},
	-- 	}
	-- 	vim.cmd.colorscheme "catppuccin-latte"
	-- end
 --  }
  -- To make a plugin not be loaded
  -- {
  --   "NvChad/nvim-colorizer.lua",
  --   enabled = false
  -- },

  -- All NvChad plugins are lazy-loaded by default
  -- For a plugin to be loaded, you will need to set either `ft`, `cmd`, `keys`, `event`, or set `lazy = false`
  -- If you want a plugin to load on startup, add `lazy = false` to a plugin spec, for example
  -- {
  --   "mg979/vim-visual-multi",
  --   lazy = false,
  -- }
}

return plugins
