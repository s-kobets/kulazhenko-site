import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Flex, Box } from '@semcore/flex-box';
import { Text } from '@semcore/typography';
import Accordion from '@semcore/accordion';
import Link from '@semcore/link';
import { Col, Row } from '@semcore/grid';
import Form from '../components/form';
import Breakpoints from '@semcore/breakpoints';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexInnerPage = ({ index }) => {
  const data = useStaticQuery(graphql`
    query Site {
      contentfulKulazhenkoSite {
        title
        description {
          description
        }
        childContentfulKulazhenkoSiteLawyerJsonNode {
          fullName
          email
          skype
          tel
          description
        }
        fee {
          fee
        }
      }
      allContentfulKulazhenkoSiteServices {
        nodes {
          title
          description {
            description
          }
        }
      }
      allContentfulKulazhenkoSiteAdvantages {
        nodes {
          title
          desctiption {
            desctiption
          }
          icon {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const lawyer =
    data.contentfulKulazhenkoSite.childContentfulKulazhenkoSiteLawyerJsonNode;

  return (
    <Layout>
      <Seo
        title="Кулаженко Павел Михайлович, адвокат, город Речица"
        description="Консультация у адвоката, адвокат по гражданским делам, адвокат по уголовным делам, адвокат по делам об административных правонарушениях, адвокат по экономическим делам"
        lang="ru"
        keywords="Юридическая помощь в Речице,адвокат,Кулаженко Павел Михайлович,Юридическая консультация Речицкого района,Гомельская областная коллегия адвокатов,защита по уголовным делам,защита по административным делам,защита по экономическим делампомощь квалифицированного адвоката,юридическая консультация речица,адвокаты в речице,юрист в речице,Консультация юриста в Речице,помощь адвоката,Сколько стоит юридическая консультация в Речице,Правовая поддержка,Адвокатская помощь"
      />

      <Flex
        className="container-x image-block"
        w="100%"
        style={{
          textAlign: 'center',
          backgroundImage:
            'url("https://static.tildacdn.com/tild6235-3235-4530-a465-313331623333/22.jpg")',
        }}
      >
        <Text
          tag="h2"
          size={[800, 700][index]}
          color="white"
          bold
          style={{ display: 'inline-flex' }}
        >
          {data.contentfulKulazhenkoSite?.title}
        </Text>
      </Flex>

      {/* Services */}
      <Flex
        id="services"
        className="container-x container-y"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={156} h={156}>
          <StaticImage src="../images/logo2.png" alt="services" />
        </Box>

        <Text tag="h2" my={10}>
          Оказываемые услуги
        </Text>

        <Box
          wMax="600px"
          style={{
            borderBottom: '1px solid #eeeeee',
          }}
        >
          <Accordion>
            {data.allContentfulKulazhenkoSiteServices.nodes.map((item) => (
              <Accordion.Item value={item.title} key={item.title}>
                <Accordion.Item.Toggle
                  position="relative"
                  tag={Flex}
                  p="27px 50px 27px 0"
                  alignItems="center"
                  style={{
                    borderTop: '1px solid #eeeeee',
                  }}
                >
                  <Text size={400} bold>
                    {item.title}
                  </Text>
                  <Accordion.Item.Chevron
                    position="absolute"
                    right="0"
                    color="stone"
                    mr={2}
                    tag="svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      stroke-width="1px"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="square"
                    >
                      <g
                        transform="translate(1.000000, 1.000000)"
                        stroke="#bd9840"
                      >
                        <path d="M0,11 L22,11"></path>
                        <path d="M11,0 L11,22"></path>
                      </g>
                    </g>
                  </Accordion.Item.Chevron>
                </Accordion.Item.Toggle>
                <Accordion.Item.Collapse>
                  <Text
                    tag="pre"
                    size={300}
                    style={{ whiteSpace: 'break-spaces' }}
                  >
                    {item.description.description}
                  </Text>
                </Accordion.Item.Collapse>
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
      </Flex>

      {/* Fee */}
      <Flex
        id="fee"
        className="container-x bg-shadow image-block"
        w="100%"
        alignItems="center"
        direction="column"
        style={{
          textAlign: 'center',
          backgroundImage:
            'url("https://static.tildacdn.com/tild3431-3838-4065-a662-613238616434/pexelsphoto510391.jpeg")',
        }}
      >
        <Box zIndex={1}>
          <Text tag="h2" mb={3} color="white" size={800} bold>
            Гонорар
          </Text>
          <Text color="white" size={[400, 500][index]} wMax="800px">
            {data.contentfulKulazhenkoSite.fee.fee}
          </Text>
        </Box>
      </Flex>

      {/* Advantages */}
      <Flex
        className="container-x container-y"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text tag="h2" mt={10}>
          Мои преимущества
        </Text>

        <Row gutter={10} mt={10} justifyContent="center">
          {data.allContentfulKulazhenkoSiteAdvantages.nodes.map((item) => (
            <Col
              span={4}
              sm={6}
              xs={12}
              mt="20px"
              key={item.title}
              direction="column"
              alignItems="center"
              justifyContent="center"
              tag={Flex}
              wMax="320px"
            >
              <Box
                w="100px"
                h="100px"
                style={{ borderRadius: '50%', overflow: 'hidden' }}
              >
                <GatsbyImage
                  image={getImage(item.icon.gatsbyImageData)}
                  alt={item.title}
                />
              </Box>
              <Text textAlign="center" size={400} my={3} bold>
                {item.title}
              </Text>
              <Text textAlign="center" size={300}>
                {item.desctiption?.desctiption}
              </Text>
            </Col>
          ))}
        </Row>
      </Flex>

      {/* Block */}
      <Flex
        id="fee"
        className="container-x image-block"
        w="100%"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url("https://static.tildacdn.com/tild3230-6465-4433-b132-336232323739/pexelsphoto29642.jpg")',
        }}
      >
        <Flex
          w="calc(100% + 40px)"
          m="0 -20px"
          px="20px"
          justifyContent="center"
          style={{
            backgroundColor: '#000',
          }}
        >
          <Flex
            py={10}
            wMax="800px"
            alignItems="center"
            direction="column"
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: '20px',
            }}
          >
            <Text size={500} bold>
              {lawyer.fullName}
            </Text>
            <Text size={300} mt={2} mb={5}>
              {lawyer.description}
            </Text>
            <Text size={400}>
              {data.contentfulKulazhenkoSite.description.description}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Form */}
      <Form />

      {/* Footer */}
      <Row tag={Flex}>
        <Col md={6} sm={12} xs={12} mb={0} w="100%" h="400px" p={0}>
          <Box
            tag="iframe"
            width="100%"
            height="100%"
            mb={0}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A86509c5e003e91f40711b96e38b482d83c20e0a750175436c1f5f7d827e30888&amp;source=constructor"
            frameborder="0"
          />
        </Col>
        <Col
          tag={Flex}
          span={6}
          sm={12}
          xs={12}
          p={10}
          direction="column"
          style={{ backgroundColor: '#303030', color: '#fff' }}
        >
          <Text size={400} bold mb={2}>
            {lawyer.fullName}
          </Text>
          <Text>
            Моб.:{' '}
            <Link color="orange" href={`tel:${lawyer.tel}`}>
              {lawyer.tel}
            </Link>
          </Text>
          <Text>
            Viber:{' '}
            <Link color="orange" href={`viber:${lawyer.tel}`}>
              {lawyer.tel}
            </Link>
          </Text>
          <Text>
            E-mail:{' '}
            <Link color="orange" href={`mailto:${lawyer.email}`}>
              {lawyer.email}
            </Link>
          </Text>
          <Text>
            Skype:{' '}
            <Link color="orange" href={`skype:${lawyer.skype}`}>
              {lawyer.skype}
            </Link>
          </Text>
          <Text size={100} mt={4}>
            Если Ваш телефонный звонок остался без ответа, то это значит, что я
            занят, и при возможности сразу же Вам перезвоню.
            <br /> P.S. Если же я Вам не перезвонил, наберите мой номер еще раз.
          </Text>
        </Col>
      </Row>
    </Layout>
  );
};

const IndexPage = (props) => {
  const [index, updateIndex] = useState(Breakpoints.mediaList.matches());

  useEffect(() => {
    const unsubscribe = Breakpoints.mediaList.addListener((index) => {
      updateIndex(index);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <IndexInnerPage {...props} index={index} />;
};

export default IndexPage;
