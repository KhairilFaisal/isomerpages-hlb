const travisScript = require("@isomerpages/isomerpages-travisci-scripts");
const travisBranch = process.env.TRAVIS_BRANCH;

if(travisBranch == "master") {
    travisScript.purgeCacheOnly(false);
}
//else {
//    travisScript.testsOnly(false);
//}
