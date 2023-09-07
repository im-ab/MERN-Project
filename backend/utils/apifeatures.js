class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCpy = { ...this.queryStr };

    const removeFeilds = ["keyword", "page", "limit"];

    removeFeilds.forEach((key) => delete queryCpy[key]);

    // Filter for Price and Rating

    let queryStr = JSON.stringify(queryCpy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr)); 

    this.query = this.query.find(queryCpy);

    return this;
  }

  pagination(resultPerPage) {
   const currentPage = Number(this.queryStr.page) || 1;

   const skip = resultPerPage * (currentPage - 1);
   
   this.query = this.query.limit(resultPerPage).skip(skip);  // limit is '5' from productController "Get all products"

   return this;
  }
}

module.exports = ApiFeatures;
