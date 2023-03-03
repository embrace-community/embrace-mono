# When using in VSCode the mappings need to be setup

Otherwise the foundry imports will not work. Open the Preferences -> Settings then search for mappings. This should open
the settings file where you should add the mappings like below:

`"solidity.remappings": [ "@openzeppelin/=apps/contracts/lib/openzeppelin-contracts/", "ds-test/=apps/contracts/lib/forge-std/lib/ds-test/src/", "forge-std/=apps/contracts/lib/forge-std/src/" ]`

# Installing Foundry/Solidity modules

When installing packages like Open Zeppelin you may run into Git issues. To get around run the command with the
--no-commit flag:

`forge install OpenZeppelin/openzeppelin-contracts --no-commit`
