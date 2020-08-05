import React from "react";
import CodeSlide from "spectacle-code-slide";
import {
  Appear,
  Fill,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Image,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const images = {
  dancingLeo: require("file-loader!../assets/dancingLeo.webm"),
  gatsbyMovie: require("../assets/gatsbyMovie.jpg"),
  graphql: require("../assets/graphql.png"),
  howGorgeous: require("file-loader!../assets/howGorgeous.webm"),
  pwa: require("../assets/pwa.png"),
  react: require("../assets/react.png"),
  thanks: require("file-loader!../assets/thanks.webm"),
  webpack: require("../assets/webpack.png"),
  whoIsGatsby: require("file-loader!../assets/whoIsGatsby.webm"),
  comoFunciona: require("../assets/comoFunciona.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#000",
    secondary: "white",
    tertiary: "#fce715",
    quarternary: "#663399"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={400}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          bgDarken="0.7"
          bgImage={images.gatsbyMovie.replace("/", "")}
        >
          <Heading size={4} fit caps lineHeight={1} style={{ color: "white" }}>
            The great Gatsby.js
          </Heading>
          {/* <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            changing the static-site generation game
          </Text> */}
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <video
            autoPlay
            loop
            src={images.whoIsGatsby.replace("/", "")}
            style={{ height: "350px" }}
          >
            O que é gatsby
          </video>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Text>
            SSG (Static Site Generator) grátis e de código aberto baseado em React com foco em tornar o desenvolvimento de sites divertido e eficiente.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <List style={{ marginTop: "0" }}>
            <ListItem>
              <Image
                src={images.react.replace("/", "")}
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem>
              <Image
                src={images.webpack.replace("/", "")}
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem style={{ textAlign: "center" }}>
              <Text>JAM Stack</Text>
            </ListItem>
            <ListItem>
              <Image
                src={images.graphql.replace("/", "")}
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem>
              <Image
                src={images.pwa.replace("/", "")}
                style={{ height: "50px" }}
              />
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image
            src={images.comoFunciona.replace("/", "")}
          />

        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading
            size={2}
            textColor="quarternary"
            style={{ marginBottom: "20px" }}
          >
            Por que usar?
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <Text>Fácil de customizar</Text>
              </Appear>
              <Appear>
                <Text>O roteamento automático é super funcional</Text>
              </Appear>
              <Appear>
                <Text>Simples e bem documentado</Text>
              </Appear>
              <Appear>
                <Text>Deploy nos principais serviços de Host e CMS</Text>
              </Appear>
              <Appear>
                <Text>
                  SEO e Velocidade impecáveis
                </Text>
              </Appear>
              <Appear>
                <Text>
                   GraphQL para consumir os dados
                </Text>
              </Appear>
              <Appear>
                <Text>Plugins!</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <video
            autoPlay
            loop
            src={images.howGorgeous.replace("/", "")}
            style={{ height: "350px" }}
          >
            how gorgeous
          </video>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading
            size={2}
            textColor="quarternary"
            style={{ marginBottom: "20px" }}
          >
            Quando não usar?
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <Text>Se o site receber muitas atualizações a publicação pode ser um pouco lenta já que todas as páginas são geradas quando o conteúdo muda.</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <video
            autoPlay
            loop
            src={images.dancingLeo.replace("/", "")}
            style={{ height: "300px" }}
          />
          <Heading size={4} textColor="quarternary" caps>
            Demo time
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="quarternary" caps>
            Requisitos
          </Heading>
          <Text>
            <b>node</b> : v6 and up
          </Text>
          <Text>
            <b>npm</b> : v3 and up
          </Text>
        </Slide>
        <CodeSlide
          bgColor="tertiary"
          textColor="black"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={require("raw-loader!../assets/install")}
          ranges={[
            { loc: [0, 1], title: "Install gatsby-cli" },
            { loc: [1, 3], title: "Get blog-starter" },
            { loc: [3, 4], title: "Start developing" }
          ]}
        />
       <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="quarternary" caps>
            Documentação
          </Heading>
          <Link>https://www.gatsbyjs.org/docs/</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="quarternary" caps>
            Plugins
          </Heading>
          <Link>https://www.gatsbyjs.org/plugins/</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="quarternary" caps>
            ShowCases
          </Heading>
          <Link>https://www.gatsbyjs.org/showcase/</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <video
            autoPlay
            loop
            src={images.thanks.replace("/", "")}
            style={{ height: "350px" }}
          >
            thanks
          </video>
          <Heading size={4} textColor="quarternary" caps>
            Thanks
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
