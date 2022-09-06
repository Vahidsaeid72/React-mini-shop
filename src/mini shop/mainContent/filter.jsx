import React from "react";

const Filter = ({ items, sortProducts, selectBrand }) => {
  return (
    <div className="filter">
      <div className="filter_result">{`تعداد محصول : ${items.length} محصول`}</div>
      <div className="filter_sort">
        <div className="filter_sort_title">مرتب سازی بر اساس</div>
        <div className="form_checkBox">
          <div className="form-group">
            <input
              type="radio"
              value="asc"
              name="radioValuse"
              onChange={(e) => sortProducts(e.target.value)}
            />
            <label htmlFor="">جدید ترین محصولات</label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              value="desc"
              name="radioValuse"
              onChange={(e) => sortProducts(e.target.value)}
            />
            <label htmlFor="">قدیمی ترین محصولات</label>
          </div>
        </div>
      </div>
      <div className="filter_brand">
        برند ها :
        <select onChange={(e) => selectBrand(e.target.value)}>
          <option value="all">همه</option>
          <option value="samsung">سامسونگ</option>
          <option value="iphone">ایفون</option>
          <option value="motorola">موتورولا</option>
          <option value="blackberry">بلک بری</option>
          <option value="lg">ال جی</option>
          <option value="sony">سونی</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
