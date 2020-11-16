/*
There are 1000 buckets, one and only one of them is poisonous, while the rest
are filled with water. They all look identical. If a pig drinks the poison it
will die within 15 minutes. What is the minimum amount of pigs you need to
figure out which bucket is poisonous within one hour?

Answer this question, and write an algorithm for the general case.

General case:

If there are n buckets and a pig drinking poison will die within m minutes,
how many pigs (x) you need to figure out the poisonous bucket within p minutes?
There is exactly one bucket with poison.

Note:

A pig can be allowed to drink simultaneously on as many buckets as one would
like, and the feeding takes no time.
After a pig has instantly finished drinking buckets, there has to be a cool down
time of m minutes. During this time, only observation is allowed and no feedings
at all.
Any given bucket can be sampled an infinite number of times (by an unlimited
number of pigs).
*/

/*
I feel like I stumbled upon a solution for this in a very blind way. I kind of
just trusted my intuition and starting playing around with base number
converters in online browsers, looking for a pattern. I found one between the
number of buckets (given in base 10), and the number of digits in that same
number, converted to a different base. The convert-to base being 1, plus the
floor of the minutesToTest divided by minutesToDie. The only case where this
doesn't work is when buckets === 1, as that's always 0, regardless of any other
input.
*/

let poorPigs = (buckets, minutesToDie, minutesToTest) => {
  return buckets === 1
    ? 0
    : (buckets - 1).toString(Math.floor(minutesToTest / minutesToDie) + 1)
        .length;
};

module.exports = { poorPigs };
