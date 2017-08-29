import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Product} from "../../models/product"
import {Observable} from "rxjs/Observable";

@Injectable()
export class TemplatesService {

    private products : Product[] = [
        {prdNo: 1242456, selPrdCd: 112423, prdNm: "페넬로피 기저귀", brandNm: "페넬로피", modelNm: "없음", createDate:"2014/03/31", category : '111'},
        {prdNo: 4231311, selPrdCd: 334456, prdNm: "가을맞이 스키커즈", brandNm: "컨버스", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 4334112, selPrdCd: 556531, prdNm: "마티네 간절기 의류", brandNm: "마티네", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 5112121, selPrdCd: 335422, prdNm: "양키캔들 차량용", brandNm: "양키", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 4214356, selPrdCd: 224224, prdNm: "삼다수 100리터", brandNm: "농심", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 7432111, selPrdCd: 564446, prdNm: "푸마 신발", brandNm: "푸마", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1124123, selPrdCd: 454454, prdNm: "LG전자 건조기 9kg", brandNm: "LG전자", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1622343, selPrdCd: 774333, prdNm: "뽀로로 사운드북", brandNm: "뽀로로", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1858969, selPrdCd: 768097, prdNm: "핑크퐁 사운드북", brandNm: "핑크퐁", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1578909, selPrdCd: 557335, prdNm: "컬처랜드 모바일 상품권", brandNm: "컬처랜드", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1476885, selPrdCd: 664768, prdNm: "삼성전자 냉장고 700리터", brandNm: "삼성전자", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1341121, selPrdCd: 989545, prdNm: "저학년 도서 기획세트", brandNm: "생각하는 고래", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1112233, selPrdCd: 212234, prdNm: "리바이스 청바지", brandNm: "리바이스", modelNm: "없음", createDate:"2014/03/31", category : ''},
        {prdNo: 1143453, selPrdCd: 222335, prdNm: "아디다스 신발", brandNm: "아디다스", modelNm: "없음", createDate:"2014/03/31", category : ''}
    ];

    constructor (private http : Http) {}
/*
    getProducts() : Observable<Product[]> {
    	return this
			.http.get('terrior/api/templates/products')
			.map(response => response.json());
	}*/
    getProducts() : Product[] {
        return this.products;
    }

    getProductById (prdNo : number) : Observable<Product> {
        return this
			.http.get('terrior/api/templates/prdocuts/${prdNo}')
            .map(response => response.json());
    }

    setProducts(product : Product){
        console.log(product);
        this.products.push(product);
        console.log(this.products.length);
    }
}
/*

@Injectable()
export class ProductService {
	searchEvent : EventEmitter<any> = new EventEmitter();

	constructor (private http : Http) {}

	search (params : ProductSearchParams) : Observable<Product[]> {
		return this.http
			.get('/products', { search : encodeParams(params) })
			.map(response => response.json());
	}

	getProducts () : Observable<Product[]> {
		return this.http.get('/products')
			.map(response => response.json());
	}

	getProductById (productId : number) : Observable<Product> {
		return this.http.get(`/products/${productId}`)
			.map(response => response.json());
	}

	getReviewsForProduct (productId : number) : Observable<Review[]> {
		return this.http
			.get(`/products/${productId}/reviews`)
			.map(response => response.json())
			.map(reviews => reviews.map(
				(r : any) => new Review(
					r.id,
					r.productId,
					new Date(r.timestamp),
					r.user,
					r.rating,
					r.comment
				)));
	}

	getAllCategories () : string[] {
		return ['Books', 'Electronics', 'Hardware'];
	}
}

/!**
 * 객체를 쿼리스트링으로 변환하는 함수
 *!/
function encodeParams (params : any) : URLSearchParams {
	const queryStr = new URLSearchParams();

	if (params.title !== null && params.title !== '') {
		queryStr.append('title', params.title);
	}
	if (params.price !== null) {
		queryStr.append('price', params.price);
	}
	if (params.category !== -1) {
		queryStr.append('category', params.category);
	}

	return queryStr;
}*/
