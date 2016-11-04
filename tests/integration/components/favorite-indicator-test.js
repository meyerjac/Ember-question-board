import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('favorite-indicator', 'Integration | Component | favorite indicator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{favorite-indicator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#favorite-indicator}}
      template block text
    {{/favorite-indicator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
