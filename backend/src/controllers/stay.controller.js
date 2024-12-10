export const createStay = (req, res) => {
    res.send("create stay");
};

export const updateStay = (req, res) => {
    res.send("update stay");
};

export const deleteStay = (req, res) => {
    res.send("delete stay");
};

export const getStays = (req, res) => {
    res.send("get stays");
};

//? User Side Stays

export const getSearchStays = (req, res) => {
    res.send("search stays");
};

export const getStaysByPropertyType = (req, res) => {
    res.send("get stays by property type");
};

export const getStaysByTrendingDestinations = (req, res) => {
    res.send("get stays by trending destinations");
}

export const getStaysByLocation = (req, res) => {
    res.send("get stays by location");
}

export const getStaysByLocationType = (req, res) => {
    res.send("get stays by location type");
}

//! for sort by options simple create one fucntion 
//! which have two three fileds and that are changing
//! based on the data that i have in the database

//! for stays filter result list i have to implement 
//!multiple filters such as property type, location, location type etc 
//! and also that can be dynamically change on the click of the filter options 
//! and also filter options can be based on the data that i have in the database
