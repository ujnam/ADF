(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Product || client.Product=== filter.Product)
                    && (!filter.Sales || client.Sales=== filter.Sales)
                    && (!filter.Customer || client.Customer=== filter.Customer)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Billion=== undefined || client.Billion=== filter.Billion);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;


    db.countries = [
        { Name: "", Id: 0 },
        { Name: "United Kingdom", Id: 1 },
        { Name: "United States", Id: 2 },
        { Name: "India", Id: 3 }
    ];

    db.customer = [
        { Name: "", Id: 0 },
        { Name: "Walmart", Id: 1 },
        { Name: "Target", Id: 2 },
        { Name: "Macy\'s", Id: 3 },
        { Name: "Big Bazaar", Id: 4 },
        { Name: "Reliance", Id: 5 },
        { Name: "Kroger", Id: 6 },
        { Name: "Costco", Id: 7 }
    ];
    
     db.product = [
        { Name: "", Id: 0 },
        { Name: "Axe", Id: 1 },
        { Name: "Dove", Id: 2 },
        { Name: "Lipton", Id: 3 },
        { Name: "Magnum", Id: 4 },
        { Name: "Surf", Id: 5 },
        { Name: "Sunsilk", Id: 6 },
        { Name: "Bru", Id: 7 },
        { Name: "Annapurna", Id: 8 },
        { Name: "Breeze", Id: 9 },
        { Name: "Caress", Id: 10 }                        
    ];


    db.clients = [
        {
            "Product": 1,
            "Sales": 61,
            "Country": 2,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 10,
            "Sales": 73,
            "Country": 2,
            "Customer": 3,
            "Billion": false
        },
        {
            "Product": 2,
            "Sales": 29,
            "Country": 3,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 2,
            "Sales": 78,
            "Country": 1,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 3,
            "Sales": 43,
            "Country": 1,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 4,
            "Sales": 51,
            "Country": 1,
            "Customer": 2,
            "Billion": true
        },
        {
            "Product": 7,
            "Sales": 59,
            "Country": 1,
            "Customer": 1,
            "Billion": false
        },
        {
            "Product": 9,
            "Sales": 58,
            "Country": 1,
            "Customer": 2,
            "Billion": true
        },
        {
            "Product": 7,
            "Sales": 62,
            "Country": 2,
            "Customer": 3,
            "Billion": false
        },
        {
            "Product": 1,
            "Sales": 39,
            "Country": 1,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 4,
            "Sales": 28,
            "Country": 1,
            "Customer": 2,
            "Billion": true
        },
        {
            "Product": 10,
            "Sales": 49,
            "Country": 3,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 9,
            "Sales": 20,
            "Country": 3,
            "Customer": 2,
            "Billion": false
        },
        {
            "Product": 10,
            "Sales": 63,
            "Country": 1,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 1,
            "Sales": 33,
            "Country": 1,
            "Customer": 2,
            "Billion": true
        },
        {
            "Product": 6,
            "Sales": 59,
            "Country": 1,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 6,
            "Sales": 24,
            "Country": 1,
            "Customer": 2,
            "Billion": true
        },
        {
            "Product": 5,
            "Sales": 73,
            "Country": 3,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 3,
            "Sales": 55,
            "Country": 1,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 3,
            "Sales": 48,
            "Country": 2,
            "Customer": 2,
            "Billion": true
        },
        {
            "Product": 3,
            "Sales": 59,
            "Country": 2,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 2,
            "Sales": 79,
            "Country": 3,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 1,
            "Sales": 20,
            "Country": 3,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 8,
            "Sales": 31,
            "Country": 1,
            "Customer": 2,
            "Billion": false
        },
        {
            "Product": 9,
            "Sales": 36,
            "Country": 2,
            "Customer": 1,
            "Billion": false
        },
        {
            "Product": 7,
            "Sales": 21,
            "Country": 1,
            "Customer": 1,
            "Billion": false
        },
        {
            "Product": 6,
            "Sales": 31,
            "Country": 2,
            "Customer": 2,
            "Billion": true
        },
        {
            "Product": 5,
            "Sales": 70,
            "Country": 3,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 1,
            "Sales": 39,
            "Country": 2,
            "Customer": 3,
            "Billion": true
        },
        {
            "Product": 9,
            "Sales": 38,
            "Country": 1,
            "Customer": 3,
            "Billion": false
        },
        {
            "Product": 9,
            "Sales": 25,
            "Country": 3,
            "Customer": 2,
            "Billion": false
        },
        {
            "Product": 4,
            "Sales": 43,
            "Country": 3,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 3,
            "Sales": 40,
            "Country": 1,
            "Customer": 1,
            "Billion": true
        },
        {
            "Product": 2,
            "Sales": 20,
            "Country": 3,
            "Customer": 1,
            "Billion": true
        },
        
    ];


}());