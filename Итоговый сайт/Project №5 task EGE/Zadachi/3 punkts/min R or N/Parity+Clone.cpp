#include <iostream>

using namespace std;

int count_digits(int r){
    int c = 0;
    while(r){
        int y = r % 2;
        if(y % 2 == 1){
            c++;
        }
        r /= 2;
    }
    return c;
}

int toN (int R, int s){
    int n = R;
    while (s){
        n /= 2;
        s--;
    }
    return n;
}

int toRByClone(int N){
    int r = N;
    if(r % 2 == 0){
        return r * 2;
    }else{
        return r * 2 + 1;
    }
}

int toRByParityBit (int N){
    int r = N;
    if(count_digits(r) % 2 == 1){
        r = r * 2 + 1;
    }else{
        r *= 2;
    }
    return r;
}

int main()
{
    int R, N, s = 2, x, y;
    cin >> x >> y;
    N = toN(x,s);
    R = toRByParityBit(N);
    R = toRByClone(R);
    while(R <= x){
        N++;
        R = toRByParityBit(N);
        R = toRByClone(R);
    }
    cout << R; // or cout << N;
    return 0;
}
