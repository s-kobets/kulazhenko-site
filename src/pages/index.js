import * as React from 'react';
// import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from '@semcore/flex-box';
import { Text } from '@semcore/typography';
import Accordion from '@semcore/accordion';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Site {
      contentfulKulazhenkoSite {
        title
      }
      allContentfulKulazhenkoSiteServices {
        nodes {
          title
          description {
            description
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Home" />

      <Flex
        className="container-x"
        py="calc(70vh / 2)"
        w="100%"
        style={{
          textAlign: 'center',
          backgroundImage:
            'url("https://static.tildacdn.com/tild6235-3235-4530-a465-313331623333/22.jpg")',
        }}
      >
        <Text
          tag="h2"
          size={800}
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
          w="600px"
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
    </Layout>
  );
};

export default IndexPage;
