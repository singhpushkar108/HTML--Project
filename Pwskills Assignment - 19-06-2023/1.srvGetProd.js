
const http = require("http");
const port = 5000;
const host = 'localhost';

const menProducts=[{ id: 1, name: 'Garnier FaceWash', category: 'Men' },
                  { id: 2, name: 'Wrist watch', category: 'Men' },
                  { id: 3, name: 'Beach Shirt', category: 'Men' },
                  { id: 4, name: 'Belt', category: 'Men' },
                  { id: 5, name: 'Shoes', category: 'Men' },
                  { id: 6, name: 'Slim Fit Jeans', category: 'Men' },
                  { id: 7, name: 'Plaid Button-down Shirt', category: 'Men' },
                  { id: 8, name: 'Casual Sneakers', category: 'Men' },
                  { id: 9, name: 'Crew Neck T-shirt', category: 'Men' },
                  { id: 10, name: 'Aviator Sunglasses', category: 'Men' },
];

const womenProducts=[{ id: 1, name: 'Ankle Strap Heels', category: 'Women' },
                     { id: 2, name: 'Designer Handbag', category: 'Women' },
                     { id: 3, name: 'Statement Necklace', category: 'Women' },
                     { id: 4, name: 'Boho Maxi Dress', category: 'Women' },
                     { id: 5, name: 'Chic Wide-Leg Pants', category: 'Women' },
                     { id: 6, name: 'Oversized Sunglasses', category: 'Women' },
                     { id: 7, name: 'Dainty Charm Bracelet', category: 'Women' },
                     { id: 8, name: 'Stylish Fedora Hat', category: 'Women' },
                     { id: 9, name: 'Floral Print Skirt', category: 'Women' },
                     { id: 10, name: 'Saree', category: 'Women' },
                     
                    ];

const server=http.createServer((req,res)=>{
	
	if (req.url==="/"){
		res.statusCode=200;
		res.setHeader("Content-type","text/plain");
		res.end('Welcome to Men & Women Dummy Data');
	}
	else if(req.url==="/men"){
		res.statusCode=200;
		res.setHeader("Content-type",'application/json');
		res.end(JSON.stringify(menProducts));
	}
    else if(req.url==="/women"){
		res.statusCode=200;
		res.setHeader("Content-type",'application/json');
		res.end(JSON.stringify(womenProducts));
	}
    
    else{
		res.statusCode=404;
		res.setHeader("Content-type","text/plain");
		res.end("Page Not found");
	}

}
	
);

server.listen(port,()=>{
    console.log(`Server is running on ${host}:${port}`);
});