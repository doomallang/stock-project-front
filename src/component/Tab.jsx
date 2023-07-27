import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function Tab() {

    return (
        <div className={'headerDiv'}>
            <Button variant="contained" href={'/'} endIcon={<SendIcon />}>메인</Button>
            <Button variant="contained" href={'recommend'} endIcon={<SendIcon />}>추천</Button>
            <Button variant="contained" href={'portfolio'} endIcon={<SendIcon />}>포트폴리오</Button>
        </div>
    )
}
