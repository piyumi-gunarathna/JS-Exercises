
class PaginationHelper {
	constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
  
	itemCount() {
    return this.collection.length;
	}
  
	pageCount() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
	}
  
	pageItemCount(pageIndex) {
    if(pageIndex < 0 || pageIndex >= this.pageCount())
      return -1;
    else if(pageIndex == this.pageCount() - 1) {
      const remainder = this.itemCount() % this.itemsPerPage; 
      return remainder > 0 ? remainder: this.itemsPerPage;
    }
    return this.itemsPerPage; 
	}
  
	pageIndex(itemIndex) {
    if(itemIndex < 0 || itemIndex >= this.itemCount())
      return -1;
    return Math.floor(itemIndex/this.itemsPerPage);
	}
}