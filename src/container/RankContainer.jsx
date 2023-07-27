import {Grid} from "@mui/material";
import CardComponent from "../component/CardComponent";
import {useEffect, useState} from "react";
import * as StockAction from "../action/StockAction";

export default function RankContainer() {
    const [rankList, setRankList] = useState([])
    useEffect(() => {
        getStockRankList()
    }, [])

    async function getStockRankList() {
        const list = await StockAction.getStockRankList()
        await console.log(list)
        await setRankList(list)
    }

    return(
        <>
            <h2>외국인 매수 상위 ({rankList.buyHighRankDate})</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                { rankList.buyHighRankList && rankList.buyHighRankList.map((list, index) =>
                    <Grid item xs={6} key={list.buyHighRankContentsUid}>
                        <CardComponent title={list.stockName}
                                       subTitle={'외국인 매수량 : ' + list.foreignerBuyPriceTp + list.foreignerBuyPrice}
                                       content={'기관 매수량 : ' + list.institutionBuyPriceTp + list.institutionBuyPrice}/>
                    </Grid>
                )}
            </Grid>
            <br/><br/><br/>
            <h2>증권사 목표가 상향주 ({rankList.rankingUpDate})</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                { rankList.rankingUpList && rankList.rankingUpList.map((list, index) =>
                    <Grid item xs={6} key={list.upStockContentsUid}>
                        <CardComponent title={list.stockName + `(${list.securities})`}
                                       subTitle={`시작목표가 : ${list.startGoalPrice} / 최종목표가 : ${list.endGoalPrice}`}
                                       content={'상향이유 : ' + list.newsDetailInfo}/>
                    </Grid>
                )}
            </Grid>
            <br/><br/><br/>
            <h2>기관 매매 동향</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                { rankList.tradingTrendList && rankList.tradingTrendList.map((list, index) =>
                    <Grid item xs={6}>
                        {list.baseDate}
                        {list.tradingTrendContentsList && list.tradingTrendContentsList.map((subList, index) =>
                            <CardComponent title={subList.stockName}
                                           subTitle={`기관 : ${subList.institution}`}
                                           content={`현재 공유 비율 : ${subList.currShareRate} / 최근 공유 비율 : ${subList.lastShareRate}`}/>
                        )}
                    </Grid>
                )}
            </Grid>
        </>
    )
}