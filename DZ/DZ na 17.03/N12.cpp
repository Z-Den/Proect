#include <iostream>
#include <string>

using namespace std;

int main(){
    string s1 (2019,'1'), s2 (2019,'3'), s = s1 + s2;
    
    while (s.find("111") != string::npos){
        if (s.find("111") != string::npos){
            s.replace(s.find("111"),3,"2");
        }
        if (s.find("222") != string::npos){
            s.replace(s.find("222"),3,"3");
        }
        if (s.find("333") != string::npos){
            s.replace(s.find("333"),3,"1");
        }
    }
    
    cout << s;
}