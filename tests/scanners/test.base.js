import sinon from 'sinon';

import BaseScanner from 'scanners/base';
import { NotImplentedError } from 'exceptions';
import { ignorePrivateFunctions } from 'utils';


class BaseScannerWithContents extends BaseScanner {
  _getContents() {
    return new Promise((resolve) => {
      resolve({});
    });
  }
}

describe('Base Scanner Class', function() {

  it('should reject when _getContents is not implemented', () => {
    var baseScanner = new BaseScanner('', 'index.html');

    return baseScanner.scan()
      .then(() => {
        assert.fail(null, null, 'Unexpected success');
      })
      .catch((err) => {
        assert.instanceOf(err, NotImplentedError);
        assert.equal(err.message, '_getContents is not implemented');
      });
  });

  it('should run all rules', () => {
    var baseScanner = new BaseScannerWithContents('', 'index.html');

    var fakeRules = {
      iAmAFakeRule: sinon.stub(),
      iAmAAnotherFakeRule: sinon.stub(),
    };

    return baseScanner.scan(fakeRules)
      .then(() => {
        assert.ok(fakeRules.iAmAFakeRule.calledOnce);
        assert.ok(fakeRules.iAmAAnotherFakeRule.calledOnce);
      });
  });

  it('should run all rules', () => {
    var baseScanner = new BaseScannerWithContents('', 'index.html');

    var fakeRules = {
      iAmAFakeRule: sinon.stub(),
      iAmAAnotherFakeRule: sinon.stub(),
    };

    return baseScanner.scan(fakeRules)
      .then(() => {
        assert.ok(fakeRules.iAmAFakeRule.calledOnce);
        assert.ok(fakeRules.iAmAAnotherFakeRule.calledOnce);
      });
  });

  it('should not run private function inside rules', () => {
    var baseScanner = new BaseScannerWithContents('', 'install.rdf');
    var fakeRules = {
      iAmAFakeRule: sinon.stub(),
      _iAmAPrivateFunction: sinon.stub(),
    };

    return baseScanner.scan(fakeRules)
      .then(() => {
        assert.ok(fakeRules.iAmAFakeRule.calledOnce);
        assert.notOk(fakeRules._iAmAPrivateFunction.calledOnce);
      });
  });

  it('should increment the number of rules run', () => {
    var baseScanner = new BaseScannerWithContents('', 'install.rdf');
    var fakeRules = {
      iAmAFakeRule: sinon.stub(),
      _iAmAPrivateFunction: sinon.stub(),
      iAmTheOtherFakeRule: sinon.stub(),
    };

    return baseScanner.scan(fakeRules)
      .then(() => {
        assert.equal(baseScanner._rulesProcessed,
                     Object.keys(ignorePrivateFunctions(fakeRules)).length);
      });
  });

});
