# When using in VSCode the mappings need to be setup

Otherwise the foundry imports will not work. Open the Preferences -> Settings then search for mappings. This should open
the settings file where you should add the mappings like below:

`"solidity.remappings": [ "@openzeppelin/=apps/contracts/lib/openzeppelin-contracts/", "@openzeppelin-upgradeable/=apps/contracts/lib/openzeppelin-contracts-upgradeable/", "ds-test/=apps/contracts/lib/forge-std/lib/ds-test/src/", "forge-std/=apps/contracts/lib/forge-std/src/" ]`

# Installing Foundry/Solidity modules

When installing packages like Open Zeppelin you may run into Git issues. To get around run the command with the
--no-commit flag:

`forge install OpenZeppelin/openzeppelin-contracts --no-commit`

# Yarn Dev script

A mnemonic is required in the global .env in order to run the command.

Oh My Zsh also requires the dotenv plugin enabled
[How to enable plugin](https://kjune.com/2022/05/oh-my-zsh-dotenv-plugin/)

# Cheatsheet

[Nader Cheatsheet for Foundry](https://github.com/dabit3/foundry-cheatsheet)
