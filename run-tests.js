function run_jasmine() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    var trivialReporter = new jasmine.TrivialReporter();
    jasmineEnv.addReporter(trivialReporter);
    jasmineEnv.execute();
}

run_jasmine();
