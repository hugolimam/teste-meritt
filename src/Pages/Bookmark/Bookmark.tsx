import React, {useState} from "react";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {Container} from "@material-ui/core"
import LinearProgress from '@material-ui/core/LinearProgress';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {Header, HeaderItems, DivIconsCenter, MainContainer, HeaderInfo, QuestionBody, ForceCenter, ButtonsBox} from "./Styles"
export default function BookMark() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return(
        <>
            <Header>
                <Container>
                    <HeaderItems>
                <p>Linguagens e códigos</p>
                <DivIconsCenter><VisibilityIcon color="secondary" style={{marginRight: 5, fontSize: "28px"}} /> 00:30:45</DivIconsCenter>
                <DivIconsCenter><ViewComfyIcon color="secondary" style={{marginRight: 5, fontSize: "28px"}} />Questões</DivIconsCenter>
                <div>
                    <Button variant="outlined" color="secondary">
                        Entregar prova <SendIcon color="secondary" style={{marginLeft: 10}} />
                    </Button></div>
                    </HeaderItems>
                </Container>
            </Header>
            <LinearProgress color="secondary" variant="determinate" value={70} />

            <Container>
                <MainContainer>
                    <HeaderInfo>
                        <div>1</div>
                        <Button variant="contained" size="large" style={{background: "#FA558F", color: "#ffffff"}}>Marcar para revisar mais tarde</Button>
                        <BookmarkIcon color="secondary" />
                    </HeaderInfo>

                    <QuestionBody>
                        <Container maxWidth="sm">

                        <img src="https://s3-alpha-sig.figma.com/img/db97/9808/8028ff5718d7d120477560c330a5e21d?Expires=1613347200&Signature=crK-bZYwjc99KNnvj6Qfk70LtgcF90Q80zgEE6ojfAPv-MGhtVW3lyLjHs7PK3Xxz478uP9aGLKye3TnUuPaO0FzE5ks9a1eylGftmOJ9wach-JWpJL8MsrpRNeK2VZUgH4pLUxyL~yO1FRLeEGJMt7N~3yQNNMd-FPxyeFe92-bTcgvnd0vXLsH7iTf7NTXmaMOPagSkmG7brw~luhyU8flYOVP-cdLewVnY6EHsNPqH~32WPHpB~jCpKPTGX4M0jWMESfS5s1j~1y8PpL78DV4YCwL8mg1gU7vv8-OPhiUv00uXgJ-74JBxfMVzdSr5C4vaPoUURSMt48hOgq-0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                        
                        <p>O infográfico aborda a importância do inglês para os negócios. Nesse texto, as expressões but e yet only evidenciam</p>

                        <FormControl component="fieldset" style={{marginTop: 15}}>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <ForceCenter>

                                    <p>A</p><FormControlLabel value="A" control={<Radio />} label="um impedimento às transações comerciais em contexto internacional." />
                                </ForceCenter>
                                <ForceCenter>
                                    <p>B</p><FormControlLabel value="B" control={<Radio />} label="o desinteresse dos funcionários nos cursos oferecidos pelas empresas." />
                                </ForceCenter>
                                <ForceCenter>
                                    <p>C</p><FormControlLabel value="C" control={<Radio />} label="a necessidade de inserção de funcionários nativos no mercado de trabalho globalizado." />
                                </ForceCenter>
                                <ForceCenter>
                                    <p>D</p><FormControlLabel value="D" control={<Radio />} label="um contraste entre o ideal e o real sobre a comunicação em inglês no mundo empresarial." />
                                </ForceCenter>
                            </RadioGroup>
                        </FormControl>
                        <ButtonsBox>
                            <Button variant="outlined" color="secondary" >Anterior</Button>
                            <Button variant="contained" color="secondary">Próximo</Button>
                        </ButtonsBox>
                        </Container>
                    </QuestionBody>
                </MainContainer>
            </Container>
        </>
    );
}