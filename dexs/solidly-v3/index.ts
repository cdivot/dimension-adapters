import * as sdk from "@defillama/sdk";
import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

const adapters = univ2Adapter({
  [CHAIN.ETHEREUM]: sdk.graph.modifyEndpoint('7StqFFqbxi3jcN5C9YxhRiTxQM8HA8XEHopsynqqxw3t'),
  // [CHAIN.BASE]: "https://api.studio.thegraph.com/query/64631/solidly-v3-base/version/latest",
  [CHAIN.OPTIMISM]: "https://api.thegraph.com/subgraphs/name/solidlylabs/solidly-v3-optimism",
  [CHAIN.ARBITRUM]: "https://api.thegraph.com/subgraphs/name/solidlylabs/solidly-v3-arbitrum",
  [CHAIN.FANTOM]: "https://api.thegraph.com/subgraphs/name/solidlylabs/solidly-v3-fantom"
}, {
  factoriesName: "factories",
  dayData: "solidlyDayData",
  dailyVolume: "volumeUSD",
  totalVolume: "totalVolumeUSD",
});

adapters.adapter.ethereum.start = 1693526400;
export default adapters;
