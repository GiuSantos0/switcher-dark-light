import React from 'react';

import { Grid } from '@material-ui/core';


import { Title, Links, StyledAvatar, Container } from './styles';

import Eu from '../../assets/eu.jpeg'

export default function Home(){
    return (
        <>
            <Title>
                Olá, eu sou a Giulia
            </Title>
            <h4> Dev Front End | Designer </h4>
            <Grid container justify="center" alignItems="center">
                <StyledAvatar src={Eu}/>
            </Grid>
            <Links> 
                <a target="_blank" href='https://www.linkedin.com/in/giulia-santos-7a096a156/'>Linkedin </a>|
                <a target="_blank" href='https://github.com/GiuSantos0'> Github </a>|
                <a target="_blank" href='#'> Curriculo </a>
            </Links>
            <Container>
                <p>
                    Lorem ipsum lobortis vivamus non interdum sodales congue bibendum, id morbi curae placerat sapien purus quisque, inceptos fringilla posuere aliquet eu odio semper. 
                    hendrerit fermentum semper volutpat himenaeos elit primis venenatis ut vulputate duis cursus sit, ac egestas integer leo sapien gravida platea accumsan quisque sodales ac. 
                    malesuada dictum magna dictum scelerisque nullam augue cursus mauris, condimentum elementum libero malesuada fames per velit convallis sollicitudin, suspendisse vehicula nunc pharetra luctus donec nam. 
                    per morbi accumsan donec pellentesque ultrices fames congue mi velit aliquam, dictum metus aptent vitae tortor himenaeos ligula elit magna tempor, eu in blandit sapien tempor facilisis etiam ante class. 
                </p>
                <p>
                    Dapibus volutpat ultrices tortor fermentum elementum ornare vel, quis rhoncus etiam euismod risus curae scelerisque, ornare fames duis sed lacinia lectus. 
                    viverra ac mi turpis dui mattis posuere placerat purus pulvinar vestibulum, pretium praesent sem venenatis duis vestibulum fermentum curabitur luctus ultrices, malesuada risus ligula turpis placerat ut neque venenatis elit. 
                    a erat sem magna lacinia tempus praesent quisque euismod, scelerisque fames duis tortor pellentesque nostra aenean primis, sociosqu turpis commodo inceptos ipsum tempus tempor. 
                    hac aliquam dolor amet bibendum sodales velit vestibulum ac eget tincidunt, tristique aenean adipiscing phasellus aenean dictum lacus porttitor tortor, euismod felis duis lorem litora convallis rhoncus metus nostra. 
                </p>
                <p>
                    In arcu donec egestas fringilla habitant blandit magna, a ullamcorper placerat tristique euismod facilisis, congue elementum habitasse integer ligula torquent. 
                    auctor etiam ut senectus imperdiet viverra, primis rhoncus nam cursus litora, leo volutpat cras bibendum. 
                    accumsan scelerisque netus nulla porta tristique sollicitudin platea nisi dapibus, pulvinar suscipit fringilla purus per integer amet blandit vestibulum nunc, auctor viverra elit etiam aenean blandit ad quisque. 
                    volutpat mauris eu iaculis nostra commodo interdum lacus iaculis nullam fermentum varius potenti quam conubia, posuere aenean non ultricies phasellus mi nec vulputate sodales interdum aliquet congue. 
                </p>
                <p>
                    Dolor eros velit egestas fermentum venenatis semper inceptos, dictum ut est placerat urna ornare, dictumst aenean in consequat hac ante. 
                    interdum bibendum curabitur proin aptent aenean pulvinar bibendum vitae rhoncus nam, porta praesent condimentum curabitur dui tempor hac tristique imperdiet, neque etiam curabitur fringilla conubia mauris id nibh egestas. 
                    morbi amet a primis fames nisl lectus litora vestibulum erat, venenatis luctus pharetra malesuada ultrices morbi venenatis faucibus, convallis viverra potenti quis elementum id vel id. 
                    pharetra nullam dapibus ornare lacus cras inceptos libero tempus venenatis, fermentum in fusce nisi suscipit dolor nam ac cursus, integer eros ullamcorper himenaeos fames vitae lacus metus. 
                </p>
                <p>
                    A duis dui habitasse consectetur iaculis auctor arcu iaculis tortor molestie, duis sit felis est molestie lectus dui egestas habitant, imperdiet ac augue fames praesent quisque quis semper nam. 
                    pulvinar malesuada sodales fringilla sociosqu cubilia primis sapien in aptent nullam, interdum lacinia erat hendrerit nisi at semper odio turpis, ligula hac quisque etiam rhoncus nisi molestie libero aptent. 
                    curabitur dolor phasellus congue venenatis rhoncus in vel justo consectetur arcu, consequat convallis nisi proin commodo curabitur odio volutpat quisque integer quisque, ipsum volutpat cursus faucibus auctor amet volutpat rutrum eros. 
                    fusce blandit faucibus etiam ligula, aptent iaculis est sociosqu sollicitudin, imperdiet tempus malesuada. 
                </p>
            </Container>
        </>
    )
}