import * as http from '../util/HttpClient'

// url
import { SERVER, STOCK } from '../constant/url'

const server = `${SERVER.IP}:${SERVER.PORT}`

export async function getStockRecommendList() {
    const url = `${server}${STOCK.RECOMMEND_LIST}`
    const method = 'get'

    const response = await http.request(url, method)
    return response.data
}

export async function getStockRankList() {
    const url = `${server}${STOCK.RANK_LIST}`
    const method = 'get'

    const response = await http.request(url, method)
    return response.data
}

export async function getPortfolioList() {
    const url = `${server}${STOCK.PORTFOLIO_LIST}`
    const method = 'get'

    const response = await http.request(url, method)
    return response.data
}