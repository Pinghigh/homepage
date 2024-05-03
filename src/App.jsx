import {
  Grid,
  Card,
  Button,
  Divider,
  Text,
  Image,
  Display,
  Spacer,
  Link,
  CssBaseline,
  GeistProvider,
} from "@geist-ui/core";
import {
  CplusplusOriginal,
  Html5Original,
  Css3Original,
  ReactOriginal,
  PythonOriginal,
  EmbeddedcOriginalWordmark,
} from "devicons-react";
import { Sun, Moon, Mail, Twitter } from "@geist-ui/icons";
import { useState } from "react";

import ArchLogo from "./img/archlinux-icon.svg?react";
import FirefoxLogo from "./img/firefox.svg?react";
import FishLogo from "./img/fish.svg?react";
import OpenZFSLogo from "./img/OpenZFS.svg?react";
import NVIMLogo from "./img/neovim.svg?react";
import CodiumLogo from "./img/codium.svg?react";
import TauriLogo from "./img/tauri.svg?react";
import RustLogo from "./img/rust.svg?react";

function MyAvatar() {
  return (
    <Display shadow caption="Wash away the anger.">
      <Image shadow width="15" height="15" src="/img/avatar.webp" />
    </Display>
  );
}

function Intro() {
  return (
    <div>
      <Text h1>This is Tibrella</Text>
      <Text font="20px" style={{ lineHeight: "35px" }}>
        <li>From China 🇨🇳</li>
        <li>Student from S2</li>
        <li>Arch Linux user</li>
        <li>Touhou Fans</li>
        <li>On the way to the full-stack programmer</li>
      </Text>
    </div>
  );
}

function UpPart() {
  return (
    <>
      <Grid.Container gap="4">
        <Grid>
          <card>
            <MyAvatar />
          </card>
        </Grid>
        <Grid>
          <card>
            <Intro />
          </card>
        </Grid>
      </Grid.Container>
      <Grid.Container
        gap={2}
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        <Grid>
          <Link href="https://blog.tibrella.space/">
            <Button type="success">Blog</Button>
          </Link>
        </Grid>
        <Grid>
          <Link href="https://github.com/pinghigh">
            <Button type="secondary">Github</Button>
          </Link>
        </Grid>
        <Grid>
          <Link href="https://qm.qq.com/q/n5gdGOmpBS">
            <Button type="warning">QQ Group</Button>
          </Link>
        </Grid>
      </Grid.Container>
      <Spacer h="3" />
    </>
  );
}

function DownPart() {
  return (
    <>
      <Grid.Container
        alignContent="center"
        alignItems="center"
        justify="center"
        gap={1}
      >
        <Grid>
          <Link href="https://archlinux.org">
            <ArchLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://mozilla.org/firefox">
            <FirefoxLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://www.rust-lang.org/zh-CN/">
            <RustLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://zh.cppreference.com/">
            <CplusplusOriginal size="80px" />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://zh-hans.react.dev/">
            <ReactOriginal size="80px" />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://www.w3cschool.cn/html5/">
            <Html5Original size="80px" />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://www.w3cschool.cn/css3/">
            <Css3Original size="80px" />
          </Link>
        </Grid>
      </Grid.Container>
      <Grid.Container
        alignContent="center"
        alignItems="center"
        justify="center"
        gap={1}
      >
        <Grid>
          <Link href="https://fishshell.com/">
            <FishLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://www.openzfs.org">
            <OpenZFSLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://neovim.io/">
            <NVIMLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://www.python.org/">
            <PythonOriginal size="80px" />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://vscodium.com/">
            <CodiumLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://tauri.app/">
            <TauriLogo
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://www.geeksforgeeks.org/embedded-c/">
            <EmbeddedcOriginalWordmark size="80px" />
          </Link>
        </Grid>
      </Grid.Container>

      <Spacer h="3" />
      <Grid.Container
        gap={2}
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        <Grid>
          <Link href="https://twitter.com/pinghigh24678">
            <Twitter />
          </Link>
        </Grid>
        <Grid>
          <Link href="mailto:pinghigh24678@outlook.com">
            <Mail />
          </Link>
        </Grid>
      </Grid.Container>
    </>
  );
}

function App() {
  const [themeType, setThemeType] = useState("light");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // margin: "auto auto",
          height: "100vh",
        }}
      >
        <Card
          shadow
          width="50"
          height="auto"
          style={{
            display: "flex",
            position: "relative",
            // alignItems: "center",
            // justifyContent: "center",
            margin: "auto auto",
            // height: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
            }}
            onClick={switchThemes}
          >
            {themeType === "light" ? <Sun /> : <Moon />}
          </div>
          <div>
            <Grid.Container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid>
                <UpPart />
              </Grid>
            </Grid.Container>
            <Divider h={5}>Titanium Kogasa</Divider>
            <Spacer h="1.5" />
            <Grid.Container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid>
                <DownPart />
              </Grid>
            </Grid.Container>
          </div>
        </Card>
      </div>
    </GeistProvider>
  );
}

export default App;
