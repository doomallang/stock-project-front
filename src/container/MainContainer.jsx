import {useEffect, useState} from "react";
import { Grid } from "@mui/material";

// ACTION
import * as StockAction from '../action/StockAction'
import CardComponent from "../component/CardComponent";

export default function MainContainer() {
    const [stockList, setStockList] = useState([])
    useEffect(() => {
        getStockRecommendList()
    }, [])

    async function getStockRecommendList() {
        const list = await StockAction.getStockRecommendList()
        await setStockList(list)
    }

    return (
        <>
            <h2>테마주 상위</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                    { stockList.themeStockList && stockList.themeStockList.map((list, index) =>
                        <Grid item xs={6} key={list.themeStockUid}>
                            <CardComponent title={list.theme} content={list.themeInfo} />
                        </Grid>
                    )}
            </Grid>
            <br/><br/><br/>
            <h2>특징주</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                { stockList.featureStockList && stockList.featureStockList.map((list, index) =>
                    <Grid item xs={6} key={list.featureStockContentsUid}>
                        <CardComponent title={list.stockName} subTitle={'증가율 : ' + list.riseRate} content={list.featureDetailInfo} />
                    </Grid>
                )}
            </Grid>
        </>
    )
}