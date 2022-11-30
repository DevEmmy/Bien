import React from 'react'
import { PricingContainer, Text, TwoWayGrid } from './Style'


const green = "rgb(25, 50, 30)";
const white = "rgb(245, 245, 245)";
const pink = "rgb(255, 131, 114)";
const yellow = "rgb(227, 238, 96)";


const Pricing = () => {
  return (
    <PricingContainer>
        <Text size="40px" align="center" margin="0 auto" color={green}>
            Strategy/Plan
        </Text>

        <Text color={green} width="70%" align="center" margin="0 auto">
        the strategy will be to use well-constructed and fool proof analyzedtechnique of investments in Sport betting, Crypto currency, Agriculture, treasury bills etc. to draw up the safest return on investment for our clients.
        </Text>

        <Text>
        The plans for with be divided into three (3) strategy plans, which are;
        </Text>

        <div className="plans">
            <div className="plan">
                <Text color={green}>
                    Diamond
                </Text>
                <div className="flex">
                    <div>
                        <Text color="rgb(100,100,100)" size="10px">
                            Duration
                        </Text>

                        <Text color={green} size="14px">
                            14 - 17days
                        </Text>
                    </div>

                    <div className="roi">
                        <Text size="12px">
                            ROI
                        </Text>
                        <Text size="10px" align="center" margin="0 auto">
                            5%
                        </Text>
                    </div>
                </div>
            </div>

            <div className="plan">
                <Text color={green}>
                    Sapphire
                </Text>
                <div className="flex">
                    <div>
                        <Text color="rgb(100,100,100)" size="10px">
                            Duration
                        </Text>

                        <Text color={green} size="14px">
                            21days
                        </Text>
                    </div>

                    <div className="roi">
                        <Text size="12px">
                            ROI
                        </Text>
                        <Text size="10px" align="center" margin="0 auto">
                            10%
                        </Text>
                    </div>
                </div>
            </div>

            <div className="plan">
                <Text color={green}>
                    Silver
                </Text>
                <div className="flex">
                    <div>
                        <Text color="rgb(100,100,100)" size="10px">
                            Duration
                        </Text>

                        <Text color={green} size="14px">
                            30days
                        </Text>
                    </div>

                    <div className="roi">
                        <Text size="12px">
                            ROI
                        </Text>
                        <Text size="10px" align="center" margin="0 auto">
                            15%
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    </PricingContainer>
  )
}

export default Pricing