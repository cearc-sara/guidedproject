//record changes to the database schema

//the up function describes the changes to apply to the database when
exports.up = function(knex) {
    //REMEMBER TO RETURN
    return knex.schema.createTable("menu_items", tbl => {
        //a primary key, called id, unsigned integer, autoincrementing
        tbl.increments()
        //index makes searching by this column faster
        tbl.string("name", 512).notNullable().unique().index()
        tbl.decimal("price", 8, 2)
        //relational databases store booleans ad 1 for true and 0 for false
        tbl.boolean("available").defaultTo(false)
    })
  
};


//the down function decribes how to undo the changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("menu_items")
};
