import {useEffect, useState} from "react";
import * as StockAction from "../action/StockAction";
import {getPortfolioList} from "../action/StockAction";
import {Grid, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import CardComponent from "../component/CardComponent";

export default function PortfolioContainer() {
    const [portfolioList, setPortfolioList] = useState([])
    const [portfolioDetail, setPortfolioDetail] = useState([])
    useEffect(() => {
        getPortfolioList()
    }, [])

    async function getPortfolioList() {
        const list = await StockAction.getPortfolioList()
        await console.log(list)
        await setPortfolioList(list.list)
        await setPortfolioDetail(list.detail)
    }

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                { portfolioList && portfolioList.map((list, index) =>
                    <Grid item xs={6} key={index}>
                        <CardComponent title={`${portfolioDetail[index].portfolioName} (${portfolioDetail[index].invstStartYmd} ~ ${portfolioDetail[index].invstEndYmd})`}
                                       subTitle={
                                        <TableHead>
                                           <TableRow>
                                               <TableCell style={{ width:'100px'}}>종목</TableCell>
                                               <TableCell style={{ width:'100px'}} align="right">가격</TableCell>
                                               <TableCell style={{ width:'100px'}} align="right">매수/매도</TableCell>
                                               <TableCell style={{ width:'100px'}} align="right">비중</TableCell>
                                           </TableRow>
                                       </TableHead>}
                                       content={
                                            list && list.map((stock, subIndex) => (
                                           <TableBody>
                                               <TableCell style={{ width:'100px'}}>{stock.stockName}</TableCell>
                                               <TableCell style={{ width:'100px'}} align="right">{stock.tradePrice}</TableCell>
                                               <TableCell style={{ width:'100px'}} align="right">{stock.tradeTp}</TableCell>
                                               <TableCell style={{ width:'100px'}} align="right">{stock.weight}</TableCell>
                                           </TableBody>
                                           ))
                                       } />
                    </Grid>
                )}
            </Grid>
        </>
    )
}