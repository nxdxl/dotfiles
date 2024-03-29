local on_attach = require("plugins.configs.lspconfig").on_attach
local capabilities = require("plugins.configs.lspconfig").capabilities
local util = require "lspconfig/util"
local lspconfig = require("lspconfig")

-- if you just want default config for the servers then put them in a table
local servers = { "clangd", "pylsp", "jdtls", "metals", "marksman" }

for _, lsp in ipairs(servers) do
  lspconfig[lsp].setup {
    on_attach = on_attach,
    capabilities = capabilities,
  }
end


-- local on_attach = function(client)
--     require'completion'.on_attach(client)
-- end

lspconfig.rust_analyzer.setup({
    on_attach = on_attach,
	capabilities = capabilities,
	filetypes = {"rust"},
	root_dir = util.root_pattern("Cargo.toml"),
    settings = {
        ["rust-analyzer"] = {
			allFeatures = true,
            -- imports = {
            --     granularity = {
            --         group = "module",
            --     },
            --     prefix = "self",
            -- },
            -- cargo = {
            --     buildScripts = {
            --         enable = true,
            --     },
            -- },
            -- procMacro = {
            --     enable = true
            -- },
        }
    }
})

-- 
-- lspconfig.pyright.setup { blabla}
