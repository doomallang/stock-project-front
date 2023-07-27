import { Card, CardContent, Typography } from "@mui/material";

export default function CardComponent({ title, subTitle, content }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subTitle}
                </Typography>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}