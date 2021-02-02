import React from "react"
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import {Container} from "@material-ui/core"

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {NameUser, Grind1, CardInfo, TitleGrid, BadgeInfo, ProgressInfo, TimeInfo, CardInfoResultados, ProgressBarResult} from "./Styles"
import { withStyles } from "@material-ui/core";

export default function Dashboard() {
    const dataProgresso = [
        {
            id: 1,
            badgeTitulo: "Simulado Enem 2021",
            corBadge: "#FF9153",
            materia: "Linguagens e códigos",
            progressBar: 20,
            tempoGasto: "00:20:45",
            questoesFeitas: 15,
            questoesTotal: 45,
            dataInicio: "20/12/20",
            dataTermino: "20/01/21",
        },
        {
            id: 2,
            badgeTitulo: "Simulado Enem 2021",
            corBadge: "#FF9153",
            materia: "Física",
            progressBar: 70,
            tempoGasto: "00:20:45",
            questoesFeitas: 15,
            questoesTotal: 45,
            dataInicio: "20/12/20",
            dataTermino: "20/01/21",
        },
        {
            id: 3,
            badgeTitulo: "Avaliação trimestral 20.3",
            corBadge: "#5653FF",
            materia: "Biologia",
            progressBar: 85,
            tempoGasto: "00:20:45",
            questoesFeitas: 15,
            questoesTotal: 45,
            dataInicio: "20/12/20",
            dataTermino: "20/01/21",
        },
        {
            id: 4,
            badgeTitulo: "Avaliação trimestral 20.3",
            corBadge: "#5653FF",
            materia: "Matemática",
            progressBar: 100,
            tempoGasto: "00:30:25",
            questoesFeitas: 15,
            questoesTotal: 45,
            dataInicio: "20/12/20",
            dataTermino: "20/01/21",
        }
    ]
    const dataProvas = [
        {
            id: 1,
            badgeTitulo: "Avaliação trimestral 20.3",
            corBadge: "#5653FF",
            disabled: "",
            materia: "Inglês",
            tempo: "00:45:00",
            questoesTotal: 10,
            dataInicio: "20/1/20",
            dataTermino: "20/02/21",
        },
        {
            id: 2,
            badgeTitulo: "Simulado Enem 2021",
            disabled: "rgba(196, 196, 196, 0.6)",
            corBadge: "#6A6A6A",
            materia: "Física",
            tempo: "01:30:00",
            questoesTotal: 45,
            dataInicio: "20/02/21",
            dataTermino: "20/03/21",
        },
    ]
    const dataResultados = [
        {
            id: 1,
            badgeTitulo: "Simulado Enem 2021",
            corBadge: "#FF9153",
            materia: "Linguagens e códigos",
            realizada: "31",
            entregue: "12/12/20",
            progressBar: 80,
            acertos: 36,
            questoesTotal: 45,
        },
        {
            id: 2,
            badgeTitulo: "Avaliação trimestral 20.3",
            corBadge: "#5653FF",
            materia: "Biologia",
            realizada: "30",
            entregue: "27/11/20",
            progressBar: 30,
            acertos: 3,
            questoesTotal: 10,
        },
        {
            id: 3,
            badgeTitulo: "Avaliação trimestral 20.3",
            corBadge: "#5653FF",
            materia: "Quimica",
            realizada: "40",
            entregue: "20/12/20",
            progressBar: 50,
            acertos: 5,
            questoesTotal: 10,
        }
    ]

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 30,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
          slidesToSlide: 1 // optional, default to 1.
        }
    };
    return(
        <Container>
        <NameUser>Olá, Hugo Lima</NameUser>
        <Grid container spacing={3}>
            <Grid container item md={8} sm={12} spacing={1}>
            <Grid item xs={12}>
                <Grind1>
                    <TitleGrid>
                        Provas em progresso ({dataProgresso.length})
                    </TitleGrid>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container"
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        keyBoardControl
                        partialVisible
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={false}
                        slidesToSlide={1}
                        swipeable
                        
                    >
                        {dataProgresso.map(progress => (
                            <CardInfo key={progress.id}>
                            <BadgeInfo style={{background: (progress.corBadge)}}>{progress.badgeTitulo}</BadgeInfo>
                            <p>{progress.materia}</p>
                            <LinearProgress color="primary" variant="determinate" value={progress.progressBar} />
                            <ProgressInfo>
                                <WatchLaterIcon style={{fontSize: "16px", marginRight: "3px"}} /> <span style={{marginRight: "8px"}}> {progress.tempoGasto} </span>
                                <ViewComfyIcon style={{fontSize: "16px", marginRight: "3px"}} />  {progress.questoesFeitas}/{progress.questoesTotal} Questões
                            </ProgressInfo>
                            <TimeInfo>
                                De {progress.dataInicio} a {progress.dataTermino}
                            </TimeInfo> 
                        </CardInfo>
                        ))}
                    </Carousel>
                </Grind1>
            </Grid>
            <Grid item xs={12}>
                <Grind1>
                    <TitleGrid>
                        Próximas provas ({dataProvas.length})
                    </TitleGrid>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container"
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        keyBoardControl
                        partialVisible
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={false}
                        slidesToSlide={1}
                        swipeable
                    >
                        {dataProvas.map(prova => (
                        <CardInfo key={prova.id} style={{background: (prova.disabled)}}>
                            <BadgeInfo style={{background: (prova.corBadge)}} >{prova.badgeTitulo}</BadgeInfo>
                            <p>{prova.materia}</p>
                            <ProgressInfo>
                                <WatchLaterIcon style={{fontSize: "16px", marginRight: "3px"}} /> <span style={{marginRight: "8px"}}> {prova.tempo} </span>
                                <ViewComfyIcon style={{fontSize: "16px", marginRight: "3px"}} />  {prova.questoesTotal} Questões
                            </ProgressInfo>
                            <TimeInfo>
                                De {prova.dataInicio} a {prova.dataTermino}
                            </TimeInfo> 
                        </CardInfo>
                        ))}
                    </Carousel>
                </Grind1>
            </Grid>
            </Grid>
            <Grid container item md={4} sm={12} spacing={1}>
            <Grid item xs={12}>
                <Grind1>
                    <TitleGrid>
                        Seus resultados ({dataResultados.length})
                    </TitleGrid>
                    {dataResultados.map(result => (
                        <CardInfoResultados key={result.id}>
                        <div>
                        <BadgeInfo  style={{background: (result.corBadge)}}>{result.badgeTitulo}</BadgeInfo>
                        <p>{result.materia}</p>
                        <ProgressInfo>
                            Realizada em {result.realizada} min 
                        </ProgressInfo>
                        <TimeInfo>
                            Entregue em {result.entregue}
                        </TimeInfo> 
                        </div>
                        <ProgressBarResult>

                        <CircularProgressbarWithChildren value={result.progressBar}>
                            <p>{result.acertos}<span>/{result.questoesTotal}</span></p>
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <strong>{result.progressBar}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                        </ProgressBarResult>
                    </CardInfoResultados>
                    ))}
                </Grind1>
                        
            </Grid>
            </Grid>
        </Grid>
        </Container>
    );
}