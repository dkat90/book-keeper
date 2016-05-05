// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
//
// export default Model.extend({
//   title: attr('string'),
//   author: attr('string'),
//   pubYear: attr('number')
// });

import DS from 'ember-data'

export default DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    pubYear: DS.attr('number'),
    image: DS.attr('string'),
    creator: DS.attr('string')
})
