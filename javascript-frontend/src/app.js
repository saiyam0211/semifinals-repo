const config = {
    url: 'test'
  // BUG: Missing }

function test() {
    return true;
}

module.exports = { test };
