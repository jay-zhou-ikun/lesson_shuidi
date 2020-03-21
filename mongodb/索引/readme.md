db.inventory.insertMany([ {"item": "f1", type:"food", quantity: 500}, {"item": "f2", type:"food", quantity: 100}, {"item": "p1", type:"paper", quantity: 200}, {"item": "p2", type:"paper", quantity: 150}, {"item": "f3", type:"food", quantity: 300}, {"item": "t1", type:"toys", quantity: 500}, {"item": "a1", type:"apparel", quantity: 250}, {"item": "t2", type:"toys", quantity: 50}, {"item": "f4", type:"food", quantity: 75} ]);

db.inventory.find( { quantity: {    $gte: 100,     $lte:200    } });

db.inventory.createIndex({quantity:1});

db.inventory.find( { quantity: {$gte:100, $lte:300}, type: "food" } ).explain('executionStats');