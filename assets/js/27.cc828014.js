(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{227:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"desmos-validator-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desmos-validator-program"}},[t._v("#")]),t._v(" Desmos Validator program")]),t._v(" "),a("p",[t._v("The time has come. We are now inviting validators to join our public testnets.")]),t._v(" "),a("p",[t._v("If you feel ready to take the challenge and help us making the Desmos chain safer and more distributed, read below to know how to do it.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Validator rewards")]),t._v(" "),a("p",[t._v("In order to get the validator program running longer and include a larger number of validators, we will periodically revisit the number of tokens that will be rewarded upon becoming a validator of our chains.")]),t._v(" "),a("p",[t._v("Also, we will reward tokens based on the activity of validators: more blocks you precommit and more reward you will get, so make sure your validator node is always active to get the larger amount of tokens possible.")]),t._v(" "),a("p",[t._v("Currently the reward for becoming a validator is set to be "),a("strong",[t._v("50 Desmos Tokens + periodic rewards based on the availability of the node")]),t._v(" (see below).")]),t._v(" "),a("p",[t._v("Please note that in order to prevent scams, you will receive the initial reward just after your validator has "),a("strong",[t._v("successfully proposed a block")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"procedure-to-become-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-to-become-a-validator"}},[t._v("#")]),t._v(" Procedure to become a validator")]),t._v(" "),a("p",[t._v("The procedure to become a validator is composed of two parts:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("First thing first, you are required to setup a full node of your server machine. To do so, please follow the "),a("a",{attrs:{href:"https://docs.desmos.network/testnets/join-public.html#validators",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),a("em",[t._v("Setting up a node")]),t._v('" guide on the Desmos documentation website'),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Once you have properly set up a full node, you can upgrade its functionality making it a validator node. To read how to do this, please refer to the "),a("a",{attrs:{href:"https://docs.desmos.network/validators/setup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),a("em",[t._v("Run a validator on Desmos")]),t._v('" guide on the Desmos documentation website'),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Testnet version and data")]),t._v(" "),a("p",[t._v("Please note that new validators must rely on the latest testnet running. Such testnet's "),a("code",[t._v("genesis.json")]),t._v(" file and seeds information can be found inside the "),a("a",{attrs:{href:"https://github.com/desmos-labs/morpheus",target:"_blank",rel:"noopener noreferrer"}},[t._v("root directory of the testnet repo"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"getting-the-initial-reward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-initial-reward"}},[t._v("#")]),t._v(" Getting the initial reward")]),t._v(" "),a("p",[t._v("After you've become a validator, to make sure you receive your reward please following this procedure:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Create a fork of this repo inside your private GitHub profile."),a("br"),t._v("\nIf you do not know how to do it, follow the "),a("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub fork guide"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Pull the fork locally:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/primer.git ~/desmos-primer\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/desmos-primer\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Make sure your fork is up to date with the Primer repository:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/desmos-labs/primer.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase upstream/master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Create a file named after your GitHub username containing the validator creation transaction hash:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<tx-hash>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ./phases/phase-2/challenges/validators/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-github-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "BFA3D9E508F1978135CB99AD07B975AB475AF8DD796C22D1B0984863B0ADACA9" >> ./phases/phase-2/challenges/validators/RiccardoM')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Commit the changes, push them to your forked repo and create a pull request. If you do not know to to create one, refer to the "),a("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pull Requests guide"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"about-periodic-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-periodic-rewards"}},[t._v("#")]),t._v(" About periodic rewards")]),t._v(" "),a("p",[t._v("In order to prevent an over-accumulation in the hands of few validators, during each Phase of the Primer program we will review the rules and quantity of the tokens that will be allocated to validators.")]),t._v(" "),a("h3",{attrs:{id:"phase-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-3"}},[t._v("#")]),t._v(" Phase 3")]),t._v(" "),a("p",[t._v("During "),a("strong",[t._v("Phase 3")]),t._v(" we have decided to allow for a maximum of "),a("strong",[t._v("250 Desmos Tokens")]),t._v(" to be distributed to each validator, based on the "),a("strong",[t._v("number of pre-commits")]),t._v(" their node will sign.")]),t._v(" "),a("p",[t._v("Such Phase has been running for 31 days. Considering an average block time of 5.70 seconds, this means that each validator should have signed approximately 469,894 pre-commits during that period of time. To incentivize validators to run their node through the whole Phase 3, we decided to adopt a logarithmic token distribution:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Pre-commits signed")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Tokens rewarded")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("78")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("331")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1,416")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("21")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6,044")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("40")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("25,796")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("73")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("110,097")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("135")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("469,894")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("250")])])])]),t._v(" "),a("h3",{attrs:{id:"phase-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-4"}},[t._v("#")]),t._v(" Phase 4")]),t._v(" "),a("p",[t._v("You can read about the incentivised program for Phase 4 at the following link: "),a("a",{attrs:{href:"https://medium.com/desmosnetwork/invest-in-desmos-invest-by-validating-e70907be87db",target:"_blank",rel:"noopener noreferrer"}},[t._v("Invest in Desmos by validating"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);