import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Мониторы'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Acer'},
            {id: 4, name: 'Bosch'}
        ]
        this._devices = [
            {id: 1 , name: 'Iphone 12 pro max', price: 24990 , rating: 5, img: 'https://cdn.citilink.ru/-NT6ItIRLfxLmd7h3FXzkHBcEWXeZPZN-m1IhL9i3Ro/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1912377_v01_b.jpg'},
            {id: 2 , name: 'Iphone 13 pro max', price: 28990 , rating: 5, img: 'https://cdn.citilink.ru/5M1wI2b2X9Lk_q_3MrnwEU0s6u4IcLQdjQ8atQeyRhA/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1901131_v01_b.jpg'},
            {id: 3 , name: 'Iphone 10 pro max', price: 33990, rating: 5, img: 'https://cdn.citilink.ru/CtZv6Lbi6iKq8Fy07gujCFclamzRj_vfis5tIw53vX0/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1928531_v01_b.jpg'},
            {id: 4 , name: 'Samsung S21', price: 46990, rating: 5, img: 'https://cdn.citilink.ru/-NT6ItIRLfxLmd7h3FXzkHBcEWXeZPZN-m1IhL9i3Ro/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1912377_v01_b.jpg'},
            {id: 5 , name: 'Iphone 12 pro max', price: 24990 , rating: 5, img: 'https://cdn.citilink.ru/5M1wI2b2X9Lk_q_3MrnwEU0s6u4IcLQdjQ8atQeyRhA/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1901131_v01_b.jpg'},
            {id: 6 , name: 'Iphone 13 pro max', price: 28990 , rating: 5, img: 'https://cdn.citilink.ru/-NT6ItIRLfxLmd7h3FXzkHBcEWXeZPZN-m1IhL9i3Ro/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1912377_v01_b.jpg'},
            {id: 7 , name: 'Iphone 10 pro max', price: 33990, rating: 5, img: 'https://cdn.citilink.ru/CtZv6Lbi6iKq8Fy07gujCFclamzRj_vfis5tIw53vX0/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1928531_v01_b.jpg'},
            {id: 8 , name: 'Samsung S21', price: 46990, rating: 5, img: 'https://cdn.citilink.ru/-NT6ItIRLfxLmd7h3FXzkHBcEWXeZPZN-m1IhL9i3Ro/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1912377_v01_b.jpg'},
            {id: 9 , name: 'Iphone 12 pro max', price: 24990 , rating: 5, img: 'https://cdn.citilink.ru/CtZv6Lbi6iKq8Fy07gujCFclamzRj_vfis5tIw53vX0/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1928531_v01_b.jpg'},
            {id: 10 , name: 'Iphone 13 pro max', price: 28990 , rating: 5, img: 'https://cdn.citilink.ru/-NT6ItIRLfxLmd7h3FXzkHBcEWXeZPZN-m1IhL9i3Ro/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1912377_v01_b.jpg'},
            {id: 11 , name: 'Iphone 10 pro max', price: 33990, rating: 5, img: 'https://cdn.citilink.ru/CtZv6Lbi6iKq8Fy07gujCFclamzRj_vfis5tIw53vX0/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1928531_v01_b.jpg'},
            {id: 12 , name: 'Samsung S21', price: 46990, rating: 5, img: 'https://cdn.citilink.ru/5M1wI2b2X9Lk_q_3MrnwEU0s6u4IcLQdjQ8atQeyRhA/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1901131_v01_b.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}