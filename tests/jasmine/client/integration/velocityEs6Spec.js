'use strict';

describe('velocityEs6', function() {
  it('displays name', function() {
    var div = document.createElement('div');
    var hello = Blaze.render(Template.hello, div);
    var name = 'foo';

    $(div).find('#name').eq(0).val(name);
    Template.hello.fireEvent('click button', {
      templateInstance: hello.templateInstance()
    });

    expect(Session.get('name')).toBe('foo');
  });
});