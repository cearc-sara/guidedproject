exports.up = function(knex) {
    return knex.schema.table("categories", tbl => {
        tbl.text("description")
    })
        
    
  };
  //run the down function using knex migrate:rollback
  exports.down = function(knex) {
    return knex.schema.table("categories", tbl => {
        tbl.dropColumn("description")
    })
  };
  