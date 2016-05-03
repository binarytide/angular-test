var md5 = require('md5')

module.exports = function() {
  var artists = this
  artists.list = [{
      'name':'John',
      'hash': md5('binarytide@gmail.com'),
      'title': 'Developer',
      'renown': 'Infinite-Scope',
      'bio': 'insert stuff here'
    },
    {
      'name':'Jesse',
      'hash': md5('jesse@test.com'),
      'title': 'Developer',
      'renown': 'TestCorp',
      'bio': 'insert stuff here'
    },
    {
      'name':'Alex',
      'hash': md5('alex@test.com'),
      'title': 'Developer',
      'renown': 'TestCorp',
      'bio': 'insert stuff here'
    },
    {
      'name':'Ouya',
      'hash': md5('ouya@test.com'),
      'title': 'Developer',
      'renown': 'TestCorp',
      'bio': 'insert stuff here'
    },
    {
      'name':'Ayhan',
      'hash': md5('ayhan@test.com'),
      'title': 'VP',
      'renown': 'TestCorp',
      'bio': 'insert stuff here'
    }
  ]
}
